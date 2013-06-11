using MvcApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MvcApp.Api
{
    public class SpeakersController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<Speaker> Get()
        {
            return new List<Speaker>
            {
                new Speaker
                {
                    FirstName = "Basem",
                    LastName = "Emara",
                    Company = "Falafel Software",
                    Position = "Sr. Software Engineer",
                    Website = "http://www.falafel.com",
                    Twitter = "@FalafelSoftware",
                    Bio = "Basem has over 10 years experience as a consultant and developer for dozens of projects for educational, advocacy, non-profit, small business, enterprise, and governmental organizations. As an innovator who recognizes and leverages the power of the web, he has been able to help real estate agencies, schools, hospitals, wholesale distributors, shipping carriers, and other businesses pioneer their industries utilizing the best that today’s technology has to offer from a more creative point of view. Simple yet elegant is the key to his approach, as well as the belief that continual process improvement is always possible. Basem has a BS in Computer Science from Florida Atlantic University and is a Microsoft Certified Solutions Developer, Systems Engineer, Technology Specialist, and Business Management Solutions Professional. His specialities include content management and e-commerce systems."
                },
                new Speaker
                {
                    FirstName = "George",
                    LastName = "Saadeh",
                    Company = "Falafel Software",
                    Position = "Sr. Web Consultant",
                    Website = "http://www.falafel.com",
                    Twitter = "@FalafelSoftware",
                    Bio = "George is a results-driven and customer-focused Senior Consultant, adept at thinking outside the box. He has advanced skills with leading-edge programming tools, with a 7 year track record of devising tailored solutions to meet ever-changing business requirements. George has experience in a range of industries including retail, telecom, banking and advertising, complemented by a great passion and ability to assimilate and utilize emerging technologies. He has in depth knowledge of the .NET platform and specializes in ASP.NET, SQL Server and WPF to deliver web enterprise solutions. George holds a Computer Engineering degree. He enjoys traveling, road tripping, music and playing basketball."
                },
                new Speaker
                {
                    FirstName = "Lino",
                    LastName = "Tadros",
                    Company = "Falafel Software",
                    Position = "President and CEO",
                    Website = "http://www.falafel.com",
                    Twitter = "@FalafelSoftware",
                    Bio = "Alain \"Lino\" Tadros is Chairman & CEO of Falafel Software, a Silicon Valley based company, with presence in Colorado and Texas, Michigan, Florida and North Carolina, dedicated to providing world-class consulting, training, and software development for small, medium, and enterprise level businesses. Prior to founding Falafel, Lino was a member of the development team at Borland for Delphi and C++Builder. Lino has been awarded Microsoft MVP status ten years in a row (2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013) for his numerous contributions to the C# community and is an expert in .NET, LINQ, ASP.NET, XAML, and Web Services. Lino is an industry renowned speaker and has given numerous presentations on 5 different continents since 1994. He also currently sits on the Board of Directors of 4 Silicon Valley corporations."
                },
                new Speaker
                {
                    FirstName = "Scott",
                    LastName = "Hanselman",
                    Company = "Microsoft",
                    Position = "Principal Community Architect for Web Platform and Tools",
                    Website = "http://www.microsoft.com",
                    Twitter = "@shanselman",
                    Bio = "Scott Hanselman works for Microsoft as Principal Community Architect for Web Platform and Tools, aiming to spread the good word about developing software, most often on the Microsoft stack. Before this he was the Chief Architect at Corillian Corporation, now a part of Checkfree, for 6+ years and before that he was a Principal Consultant at STEP Technology for nearly 7 years. He was also involved in a few things Microsoft-related like the MVP and RD programs and will speak about computers (and other passions) whenever someone will listen to him. He's written in a few books, most recently with Bill Evjen and Devin Rader on Professional ASP.NET. He blogs at http://www.hanselman.com for the last 10 years and podcasts weekly at http://www.hanselminutes.com and http://www.thisdeveloperslife.com."
                },
                new Speaker
                {
                    FirstName = "Tim",
                    LastName = "Huckaby",
                    Company = "Actus Interactive Software",
                    Position = "CEO",
                    Website = "http://www.timhuckaby.com",
                    Twitter = "@TimHuckaby",
                    Bio = "Tim Huckaby is focused on the Natural User Interface (NUI)- Touch, Gesture, and Neural in Rich Client Technologies like HTML5, Silverlight, WPF, & IOS on a broad spectrum of devices that include computers, tablets, the Surface, the Kinect, and mobile devices. Tim has been called a “Pioneer of the Smart Client Revolution” by the press. Tim has been awarded many times for the highest rated technical presentations and keynotes for Microsoft and many other technology conferences around the world. Tim is consistently rated in the top 10% of all speakers at these events. Tim has been on stage with, and done numerous keynote demos for many Microsoft executives including Bill Gates and Steve Ballmer. Tim founded InterKnowlogy, experts in Microsoft .NET and Microsoft Platforms, in 1999 and Actus Interactive Software in 2011 and has 30+ years of experience including serving on a Microsoft product team as a development lead on an architecture team on a Server Product. Tim is a Microsoft Regional Director, an Microsoft MVP and serves on multiple Microsoft councils and boards like the Microsoft .NET Partner Advisory Council."
                }
            };
        }
    }
}