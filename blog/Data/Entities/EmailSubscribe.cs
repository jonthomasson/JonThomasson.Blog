using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JonThomasson.Blog.Data.Entities
{
    public class EmailSubscribe
    {
        [Key]
        public string Email { get; set; }
        public DateTime DateSubscribed { get; set; }
    }
}
