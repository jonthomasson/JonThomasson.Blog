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

        public void AddEntity(object model)
        {
            _ctx.Add(model);
        }

        public IEnumerable<Post> GetAllPosts(bool includeComments)
        {
            if (includeComments)
            {
                return _ctx.Posts.Include(t => t.PostTags).ThenInclude(t => t.Tag).Include(c => c.Comments).Where(p => p.IsActive == true).OrderByDescending(p => p.Id).ToList();
            }

            return _ctx.Posts.Include(t => t.PostTags).ThenInclude(t => t.Tag).Where(p => p.IsActive == true).OrderByDescending(p => p.Id)
                .ToList();
        }

        public Post GetPostById(int id)
        {
            return _ctx.Posts
                .FirstOrDefault(o => o.Id == id);
        }

        public void AddComment(Comment comment)
        {
            AddEntity(comment);
        }

        public bool SaveAll()
        {
            return _ctx.SaveChanges() > 0;
        }
    }
}
