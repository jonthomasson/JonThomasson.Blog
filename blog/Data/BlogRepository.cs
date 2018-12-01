using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JonThomasson.Blog.Data;
using JonThomasson.Blog.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace JonThomasson.Blog.Data 
{

    public class BlogRepository : IBlogRepository
    {
        private readonly BlogContext _ctx;

        public BlogRepository(BlogContext ctx)
        {
            _ctx = ctx;
        }

        public IEnumerable<Post> GetAllPosts()
        {
            //return _ctx.Posts.Include(c => c.Comments).ToList();

            return _ctx.Posts
                .ToList();
        }

        public Post GetPostById(int id)
        {
            return _ctx.Posts
                .FirstOrDefault(o => o.Id == id);
        }
    }
}
