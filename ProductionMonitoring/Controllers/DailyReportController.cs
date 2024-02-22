using Microsoft.AspNetCore.Mvc;

namespace ProductionMonitoring.Controllers
{
    public class DailyReportController : Controller
    {
        public IActionResult DailyReport()
        {
            return View();
        }

        public IActionResult AddNote() 
        {
            return View();
        }

        public IActionResult DailyMonth() 
        {
            return View();
        }

        public IActionResult AddMonth() 
        {
            return View();
        }
    }
}
