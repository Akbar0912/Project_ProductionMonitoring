using Microsoft.AspNetCore.Mvc;

namespace ProductionMonitoring.Controllers
{
    public class MonitoringController : Controller
    {
        public IActionResult Monitoring()
        {
            return View();
        }
    }
}
