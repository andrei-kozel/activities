using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class ActivitiesController : BaseApiController
{
  private readonly DataContext _context;

  /* A constructor. */
  public ActivitiesController(DataContext context)
  {
    _context = context;
  }

  /// <summary>
  /// This function returns a list of activities from the database.
  /// </summary>
  /// <returns>
  /// A list of activities
  /// </returns>
  [HttpGet]
  public async Task<ActionResult<List<Activity>>> GetActivities()
  {
    return await _context.Activities.ToListAsync();
  }

  /// <summary>
  /// It gets the activity with the given id.
  /// </summary>
  /// <param name="Guid">A globally unique identifier (GUID) is a 128-bit integer (16 bytes) that can
  /// be used across all computers and networks wherever a unique identifier is required. Such an
  /// identifier has a very low probability of being duplicated.</param>
  /// <returns>
  /// The activity with the given id.
  /// </returns>
  [HttpGet("{id}")]
  public async Task<ActionResult<Activity>> GetActivity(Guid id)
  {
    return await _context.Activities.FindAsync(id);
  }
}