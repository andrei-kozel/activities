using Application.Activities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ActivitiesController : BaseApiController
{
  
  /// <summary>
  /// This function returns a list of activities from the database.
  /// </summary>
  /// <returns>
  /// A list of activities
  /// </returns>
  [HttpGet]
  public async Task<ActionResult<List<Activity>>> GetActivities()
  {
    return await Mediator.Send(new List.Query());
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
    return await Mediator.Send(new Details.Query{Id=id});
  }
}