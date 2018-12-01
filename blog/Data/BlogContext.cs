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
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Comment> Comments { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            //builder.Entity<Post>().HasOne(p => p.PostTags).WithMany(t => t.);

            //builder.Entity<Product>()
            //    .Property(p => p.Price)
            //    .HasColumnType("decimal(18,2)");

            //builder.Entity<OrderItem>()
            //    .Property(p => p.UnitPrice)
            //    .HasColumnType("decimal(18,2)");
        }
    }
}
