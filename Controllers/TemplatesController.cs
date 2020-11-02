using System.Security.Principal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CvCreator.Models.Account;
using CvCreator.Data;
using CvCreator.Models;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using CvCreator.Models.DTOs;

namespace CvCreator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TemplatesController : ControllerBase
    {
        private ApplicationDbContext _context;
        private IMapper _mapper;

        public TemplatesController(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }


        [HttpGet]
        public async Task<IEnumerable<Template>> Get() => await _context.Templates.ToListAsync();


        [HttpGet]
        [Route("{id}")]
        public async Task<Template> Get(int id) => await _context.Templates.SingleOrDefaultAsync(d => d.Id == id);


        [HttpPost]
        [Authorize(Roles = Role.Admin)]
        public async Task<IActionResult> Post(Template template)
        {
            if (ModelState.IsValid)
            {
                await _context.Templates.AddAsync(template);
                await _context.SaveChangesAsync();
                return Ok();
            }
            return BadRequest();
        }

        [HttpPut]
        [Route("{id}")]
        [Authorize(Roles = Role.Admin)]
        public async Task<IActionResult> Put(int id, [FromBody] TemplateDTO template)
        {
            var templateFromDb = await _context.Templates.FirstOrDefaultAsync(d => d.Id == id);

            if (templateFromDb is null)
                return NotFound();

            if (ModelState.IsValid)
            {
                _mapper.Map<TemplateDTO, Template>(template, templateFromDb);
                await _context.SaveChangesAsync();

                return Ok(templateFromDb);
            }

            return BadRequest();
        }

        [HttpDelete]
        [Route("{id}")]
        [Authorize(Roles = Role.Admin)]
        public async Task<IActionResult> Delete(int id)
        {
            var template = await _context.Templates.FirstOrDefaultAsync(d => d.Id == id);

            if (template is null)
                return NotFound();

            _context.Templates.Remove(template);
            await _context.SaveChangesAsync();

            return Ok(template);
        }
    }
}
