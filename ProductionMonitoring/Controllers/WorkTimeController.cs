using Microsoft.AspNetCore.Mvc;

namespace ProductionMonitoring.Controllers
{
    public class WorkTimeController : Controller
    {
        public IActionResult WorkTime()
        {
            return View();
        }
    }
}
