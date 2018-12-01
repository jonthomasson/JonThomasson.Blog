using System;
using Microsoft.AspNetCore.Mvc;

namespace JonThomasson.Blog.Controllers
{
    public class BlogController : Controller
    {
        
        public IActionResult Index()
        {
            return View();
        }

        

    }
}