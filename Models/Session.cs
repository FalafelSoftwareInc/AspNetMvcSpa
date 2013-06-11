using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcApp.Models
{
    public class Session
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Speakers { get; set; }
        public DateTime StartDate { get; set; }
        public string Location { get; set; }
    }
}