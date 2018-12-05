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
        IEnumerable<Post> GetAllPosts(bool includeComments);
        Post GetPostById(int id);
    }
}
