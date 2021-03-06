﻿using System;
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
        [MaxLength(500)]
        public string Description { get; set; }
        [MaxLength(150)]
        public string PhotoName { get; set; }
        public bool IsActive { get; set; }
        public ICollection<PostTag> PostTags { get; set; }
        public ICollection<Comment> Comments { get; set; }
    }
}
