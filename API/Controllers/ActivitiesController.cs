using Application.Activities;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ActivitiesController : BaseApiController
{
    /// <summary>
    ///     This function returns a list of activities from the database.
    /// </summary>
    /// <returns>
    ///     A list of activities
    /// </returns>
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
        return await Mediator.Send(new List.Query());
    }

    /// <summary>
    ///     It gets the activity with the given id.
    /// </summary>
    /// <param name="Guid">
    ///     A globally unique identifier (GUID) is a 128-bit integer (16 bytes) that can
    ///     be used across all computers and networks wherever a unique identifier is required. Such an
    ///     identifier has a very low probability of being duplicated.
    /// </param>
    /// <returns>
    ///     The activity with the given id.
    /// </returns>
    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivity(Guid id)
    {
        return await Mediator.Send(new Details.Query { Id = id });
    }

    /// <summary>
    ///     It takes an activity object, sends it to the mediator, and returns the result
    /// </summary>
    /// <param name="Activity">This is the model that we are passing to the API.</param>
    /// <returns>
    ///     The result of the command being sent to the mediator.
    /// </returns>
    [HttpPost]
    public async Task<IActionResult> CreateActivity([FromBody] Activity activity)
    {
        return Ok(await Mediator.Send(new Create.Command { Activity = activity }));
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> EditActivity(Guid id, Activity activity)
    {
        activity.Id = id;
        return Ok(await Mediator.Send(new Edit.Command { Activity = activity }));
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteActivity(Guid id)
    {
        return Ok(await Mediator.Send(new Delete.Command { Id = id }));
    }
}