namespace Forging.Core.Dtos
{
    public class CreateUserDto
    {
        public required string Id { get; set; }
        public string? Username { get; set; }
        public List<string> Email { get; set; }
        public List<string> PhoneNumber { get; set; }

        public List<string>? Roles { get; set; } = new List<string>();

        public string ImageUrl { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
