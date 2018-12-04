using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JonThomasson.Blog.ViewModels
{
    public class PostViewModel
    {
        public int Id { get; set; }
        public DateTime CreationDate { get; set; }
        public string BodyHtml { get; set; }
        public string BodyMd { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string PhotoName { get; set; }
        public string PhotoNameThumb { get; set; }
        public ICollection<TagViewModel> Tags { get; set; }
        public ICollection<CommentViewModel> Comments { get; set; }
    }
}
