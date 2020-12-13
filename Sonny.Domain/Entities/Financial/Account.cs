using System;

namespace Sonny.Domain.Entities.Financial
{
    public class Account
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal price { get; set; }
        public DateTime DueDate { get; set; }
        public TypePayment TypePayment { get; set; }
        public ConditionPayment ConditionPayment { get; set; }


    }
}
