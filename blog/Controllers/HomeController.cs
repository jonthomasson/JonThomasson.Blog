using AutoMapper;
using JonThomasson.Blog.Data;
using JonThomasson.Blog.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JonThomasson.Blog.Controllers
{
    public class HomeController : Controller
    {
        private readonly IBlogRepository _repository;

        public HomeController(IBlogRepository repository)
        {
            _repository = repository;
        }

        [HttpPost]
        public IActionResult ContactMe([FromBody] MessageViewModel message)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newMessage = Mapper.Map<Data.Entities.Message>(message);

                    _repository.ContactMe(Mapper.Map<Data.Entities.Message>(newMessage));

                    if (_repository.SaveAll())
                    {
                        return Created($"/api/home/contact/", Mapper.Map<MessageViewModel>(newMessage));
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

            return BadRequest("Failed to send message");
        }
    }

    
}
