using System;

namespace Sonny.Domain.Entities.Administrative.Service
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ToPerform { get; set; }
        public TimeSpan ExecutionTime { get; set; }
        public string Description { get; set; }
        public string Price { get; set; }
        public string Comments { get; set; }

    }
}
