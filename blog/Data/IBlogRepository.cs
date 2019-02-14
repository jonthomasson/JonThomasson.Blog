using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JonThomasson.Blog.Data.Entities;

namespace JonThomasson.Blog.Data
{
    public interface IBlogRepository
    {
        void AddEntity(object model);
        IEnumerable<Post> GetAllPosts(bool includeComments);
        Post GetPostById(int id);
        void AddComment(Comment comment);
        void EmailSubscribe(EmailSubscribe emailSubscribe);
        bool SaveAll();
    }
}
