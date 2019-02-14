using System;
using JonThomasson.Blog.Data;
using System.Threading.Tasks;
using AutoMapper;


using Microsoft.AspNetCore.Mvc;
using JonThomasson.Blog.ViewModels;

namespace JonThomasson.Blog.Controllers
{
    public class BlogController : Controller
    {
        private readonly IBlogRepository _repository;

        public BlogController(IBlogRepository repository)
        {
            _repository = repository;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Email()
        {
            return View("Index");
        }


        [HttpPost]
        public IActionResult EmailSubscribe([FromBody] EmailSubscribeViewModel emailSubscribe)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newEmailSubscribe = Mapper.Map<Data.Entities.EmailSubscribe>(emailSubscribe);
                    newEmailSubscribe.DateSubscribed = System.DateTime.Now;

                    _repository.EmailSubscribe(Mapper.Map<Data.Entities.EmailSubscribe>(newEmailSubscribe));

                    if (_repository.SaveAll())
                    {
                        return Created($"/api/blog/subscribe/{newEmailSubscribe.Email}", Mapper.Map<EmailSubscribeViewModel>(newEmailSubscribe));
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                //_logger.LogError($"Failed to subscribe: {ex}");
            }

            return BadRequest("Failed to subscribe");
        }
    }

    
}