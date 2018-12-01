using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace JonThomasson.Blog.Data.Entities
{
    public class Post
    {
        public int Id { get; set; }
        public DateTime CreationDate { get; set; }
        public string BodyHtml { get; set; }
        public string BodyMd { get; set; }
        [MaxLength(250)]
        public string Title { get; set; }
        public ICollection<PostTags> Tags { get; set; }
        public ICollection<Comment> Comments { get; set; }
    }
}
