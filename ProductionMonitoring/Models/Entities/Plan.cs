namespace ProductionMonitoring.Models.Entities
{
    public class Plan
    {
        public Guid Id { get; set; }

        public DateTime Date { get; set; }

        public string ModelCode { get; set; }

        public string ModelNumber { get; set; }

        public double Cycletime { get; set; }

        public int Plann { get; set; }

        public int Actual { get; set; }

        public int Balancing { get; set; }

        public bool Status { get; set; }
    }
}
