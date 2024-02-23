using Microsoft.AspNetCore.Mvc;

namespace ProductionMonitoring.Controllers
{
    public class LoginController : Controller
    {
        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public IActionResult LoginProcess() 
        {
            return RedirectToAction("Index", "Home");
        }
    }
}
