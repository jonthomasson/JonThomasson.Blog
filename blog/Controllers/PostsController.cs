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
    [Route("api/posts")]
    public class PostsController : Controller
    {
        private readonly IBlogRepository _repository;

        public PostsController(IBlogRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("{id}")]
        public IActionResult GetPost(int id)
        {
            try
            {
                var post = _repository.GetAllPosts(true).FirstOrDefault(p => p.Id == id);
                return Ok(Mapper.Map<PostDetailViewModel>(post));

            }
            catch (Exception ex)
            {
                return BadRequest($"Failed to get posts. {ex.Message}");
            }
        }

        [HttpGet]
        public IActionResult Get(bool includeComments = false)
        {
            try
            {
                return Ok(Mapper.Map<IEnumerable<PostViewModel>>(_repository.GetAllPosts(includeComments)));

            }
            catch (Exception ex)
            {
                return BadRequest($"Failed to get posts. {ex.Message}");
            }
        }
        [HttpGet("getlatest")]
        public IActionResult GetLatest(int numPosts)
        {
            try
            {
                var posts = _repository.GetAllPosts(false);

                return Ok(Mapper.Map<IEnumerable<PostListViewModel>>(posts).Take(numPosts));
            }
            catch (Exception ex)
            {
                return BadRequest($"Failed to get posts. {ex.Message}");
            }
        }

        [HttpPost("addcomment")]
        public async Task<IActionResult> AddComment([FromBody]CommentViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newComment = Mapper.Map<Data.Entities.Comment>(model);

                    _repository.AddComment(Mapper.Map<Data.Entities.Comment>(newComment));

                    if (_repository.SaveAll())
                    {
                        return Created($"/api/posts/comment/{newComment.Id}", Mapper.Map<CommentViewModel>(newComment));
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                //_logger.LogError($"Failed to save comment: {ex}");
            }

            return BadRequest("Failed to save comment");
        }
    }
}