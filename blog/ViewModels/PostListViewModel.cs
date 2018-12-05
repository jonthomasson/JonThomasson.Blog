using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JonThomasson.Blog.ViewModels
{
    public class PostListViewModel
    {
        public int Id { get; set; }
        public DateTime CreationDate { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string PhotoName { get; set; }
        public ICollection<PostTagViewModel> PostTags { get; set; }
    }

    public class PostTagViewModel
    {
        public int PostId { get; set; }
        public int TagId { get; set; }
        public TagViewModel Tag { get; set; }
    }
}
