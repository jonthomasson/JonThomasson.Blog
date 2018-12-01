using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JonThomasson.Blog.ViewModels
{
    public class CommentViewModel
    {
        public int Id { get; set; }
        public int PostId { get; set; }
        public string Text { get; set; }
        public DateTime CreationDate { get; set; }
        public string UserDisplayName { get; set; }
    }
}
