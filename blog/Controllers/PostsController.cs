using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using JonThomasson.Blog.Data;
using JonThomasson.Blog.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace JonThomasson.Blog.Controllers
{
    [Route("api/[Controller]")]
    public class PostsController : Controller
    {
        private readonly IBlogRepository _repository;

        public PostsController(IBlogRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                //return Ok(_repository.GetAllPosts());
                return Ok(Mapper.Map<IEnumerable<PostViewModel>>(_repository.GetAllPosts()));

            }
            catch (Exception ex)
            {
                return BadRequest("Failed to get products");
            }
        }
    }
}