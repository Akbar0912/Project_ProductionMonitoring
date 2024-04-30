using Microsoft.AspNetCore.Mvc;
using ProductionMonitoring.Models;

namespace ProductionMonitoring.Controllers
{
    public class PlanController : Controller
    {
       /* private readonly ApplicationDbContext dbContext;

        public PlanController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }*/
        public IActionResult Plan()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Add()
        {
            return View();
        }
/*
        [HttpPost]
        public async Task<IActionResult> Add(AddPlanViewModel viewModel)
        {
            var plan = new Plan
            {
                Date = DateTime.Now,
                ModelCode = viewModel.ModelCode,
                ModelNumber = viewModel.ModelNumber,
                Cycletime = viewModel.Cycletime,
                Plann = viewModel.Plann,
                Actual = viewModel.Actual,
                Balancing = viewModel.Balancing,
                Status = viewModel.Status
            };

            await dbContext.Plans.AddAsync(plan);
            await dbContext.SaveChangesAsync();

            return View();
        }*/
    }
}
