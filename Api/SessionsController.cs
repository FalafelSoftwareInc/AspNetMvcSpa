using MvcApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MvcApp.Api
{
    public class SessionsController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<Session> Get()
        {
            return new List<Session>
            {
                new Session
                {
                    Title = "Building Single Page Apps in ASP.NET MVC",
                    Description = "Page refreshes are a thing of the past. The web users of today expect a modern experience that only a single page application can deliver. For this demo, we will be using server-side and client-side MVC with a router to achieve this and also results in a modern, scalable, and extensible JavaScript application.",
                    Speakers = "Basem Emara",
                    StartDate = new DateTime(2013, 06, 10),
                    Location = "TBD"
                },
                new Session
                {
                    Title = "Crafting Cross-Platform Mobile Apps wth HTML, CSS, and JS with Icenium",
                    Description = "In this session you will be introduced to mobile development using Icenium, the cross-platform mobile development IDE. Topics discussed will include: how to leverage your existing web-development skills to build mobile apps, using the Windows and web-based Icenium IDEs, Icenium’s cloud services, using phone features, testing, debugging, and deploying to the app stores.",
                    Speakers = "Jonathan Tower",
                    StartDate = new DateTime(2013, 06, 10),
                    Location = "TBD"
                },
                new Session
                {
                    Title = "Building Kendo UI Widgets for Sitefinity",
                    Description = "Are you still creating widgets using server-side technologies? Join us while we propose a much more modern approach. For this demo, we will be creating HTML5, CSS3, and JavaScript widgets for Sitefinity using Kendo UI and Web API.",
                    Speakers = "Basem Emara",
                    StartDate = new DateTime(2013, 06, 10),
                    Location = "TBD"
                },
                new Session
                {
                    Title = "Going from Web to Mobile App with Sitefinity",
                    Description = "Responsive design is great for morphing your website to different device resolution. However, sometimes your users expect more. Well, there's an app for that! In this demo, we will be converting a Sitefinity website to a mobile app using Kendo Mobile using Telerik Icenium.",
                    Speakers = "George Saadeh",
                    StartDate = new DateTime(2013, 06, 10),
                    Location = "TBD"
                }
            };
        }
    }
}