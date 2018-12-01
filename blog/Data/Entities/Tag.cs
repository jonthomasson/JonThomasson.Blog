using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace JonThomasson.Blog.Data.Entities
{
    public class Tag
    {
        public int Id { get; set; }
        [MaxLength(35)]
        public string TagName { get; set; }
        public ICollection<PostTags> Posts { get; set; }
    }
}
