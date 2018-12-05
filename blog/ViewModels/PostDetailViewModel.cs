using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JonThomasson.Blog.ViewModels
{
    public class PostDetailViewModel
    {
        public int Id { get; set; }
        public DateTime CreationDate { get; set; }
        public string BodyHtml { get; set; }
        public string Title { get; set; }
        public string PhotoName { get; set; }
        public ICollection<PostTagViewModel> PostTags { get; set; }
        public ICollection<CommentViewModel> Comments { get; set; }
    }
}
