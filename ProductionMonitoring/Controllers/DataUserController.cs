using Microsoft.AspNetCore.Mvc;

namespace ProductionMonitoring.Controllers
{
    public class DataUserController : Controller
    {
        public IActionResult DataUser()
        {
            return View();
        }

        public IActionResult AddUser() 
        {
            return View();
        }
    }
}
