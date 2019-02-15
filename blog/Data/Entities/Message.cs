using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JonThomasson.Blog.Data.Entities
{
    public class Message
    {
        public string Name { get; set; }
        [Key]
        public string Email { get; set; }
        public string Subject { get; set; }
        public string MessageText { get; set; }
    }
}
