﻿// <auto-generated />
using System;
using JonThomasson.Blog.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace JonThomasson.Blog.Migrations
{
    [DbContext(typeof(BlogContext))]
    [Migration("20181201141012_Migration5")]
    partial class Migration5
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.3-rtm-32065")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("JonThomasson.Blog.Data.Entities.Comment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CreationDate");

                    b.Property<int>("PostId");

                    b.Property<string>("Text")
                        .HasMaxLength(600);

                    b.Property<string>("UserDisplayName")
                        .HasMaxLength(30);

                    b.HasKey("Id");

                    b.HasIndex("PostId");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("JonThomasson.Blog.Data.Entities.Post", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("BodyHtml");

                    b.Property<string>("BodyMd");

                    b.Property<DateTime>("CreationDate");

                    b.Property<string>("Title")
                        .HasMaxLength(250);

                    b.HasKey("Id");

                    b.ToTable("Posts");
                });

            modelBuilder.Entity("JonThomasson.Blog.Data.Entities.Tag", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("PostId");

                    b.Property<string>("TagName")
                        .HasMaxLength(35);

                    b.HasKey("Id");

                    b.HasIndex("PostId");

                    b.ToTable("Tags");
                });

            modelBuilder.Entity("JonThomasson.Blog.Data.Entities.Comment", b =>
                {
                    b.HasOne("JonThomasson.Blog.Data.Entities.Post")
                        .WithMany("Comments")
                        .HasForeignKey("PostId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("JonThomasson.Blog.Data.Entities.Tag", b =>
                {
                    b.HasOne("JonThomasson.Blog.Data.Entities.Post")
                        .WithMany("PostTags")
                        .HasForeignKey("PostId");
                });
#pragma warning restore 612, 618
        }
    }
}
