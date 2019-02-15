using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JonThomasson.Blog.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace JonThomasson.Blog.Data
{
    public class BlogContext : DbContext
    {
        public BlogContext(DbContextOptions<BlogContext> options) : base(options)
        {
        }

        public DbSet<Post> Posts { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<EmailSubscribe> EmailSubscribes { get; set; }


        /// <summary>
        /// use this area to add model hints about how the db will be generated from your entities.
        /// </summary>
        /// <param name="builder"></param>
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Post>()
           .Property(b => b.IsActive)
           .HasDefaultValue(0);

            builder.Entity<PostTag>()
                .HasKey(bc => new { bc.PostId, bc.TagId });
            builder.Entity<PostTag>()
                .HasOne(bc => bc.Post)
                .WithMany(b => b.PostTags)
                .HasForeignKey(bc => bc.PostId);
            builder.Entity<PostTag>()
                .HasOne(bc => bc.Tag)
                .WithMany(c => c.PostTags)
                .HasForeignKey(bc => bc.TagId);

        }
    }
}
