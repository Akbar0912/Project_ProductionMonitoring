using Microsoft.AspNetCore.Mvc;

namespace ProductionMonitoring.Controllers
{
    public class ProductionController : Controller
    {
        public IActionResult Month()
        {
            return View();
        }

        public IActionResult Day()
        {
            return View();
        }
    }
}
