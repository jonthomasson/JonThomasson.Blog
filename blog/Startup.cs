using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JonThomasson.Blog.Data;
using JonThomasson.Blog.Data.Entities;
using JonThomasson.Blog.ViewModels;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;

namespace blog
{
    public class Startup
    {
        public static IConfiguration Configuration { get; private set; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {


            var connectionString = Startup.Configuration["connectionStrings:connectionString"];
            services.AddDbContext<BlogContext>(o => o.UseSqlServer(connectionString));

            //services.AddAutoMapper();

            //services.AddTransient<DutchSeeder>();

            services.AddScoped<IBlogRepository, BlogRepository>();

            //services.AddTransient<IMailService, NullMailService>();
            // Support for real mail service

            services.AddMvc()
                .AddJsonOptions(opt => opt.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore)
              .SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                //this will display our user friendly error message for a production error stored at Pages/Error.cshtml
                app.UseExceptionHandler("/error"); 
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            //app.UseNodeModules(env);

            //app.UseAuthentication();

            AutoMapper.Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Post, PostViewModel>();
                cfg.CreateMap<Comment, CommentViewModel>();
                cfg.CreateMap<Tag, TagViewModel>();
                cfg.CreateMap<Post, PostListViewModel>();
                cfg.CreateMap<PostTag, PostTagViewModel>();

            });

            app.UseMvc(cfg =>
            {
                cfg.MapRoute("Default",
                  "{controller}/{action}/{id?}",
                  new { controller = "Blog", Action = "Index" });
            });

        }
    }
}
