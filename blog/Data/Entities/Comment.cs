using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace JonThomasson.Blog.Data.Entities
{
    public class Comment
    {
        public int Id { get; set; }
        public int PostId { get; set; }
        [MaxLength(600)]
        public string Text { get; set; }
        public DateTime CreationDate { get; set; }
        [MaxLength(30)]
        public string UserDisplayName { get; set; }

    }
}
