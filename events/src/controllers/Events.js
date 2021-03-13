import computeSourceMap from "sucrase/dist/computeSourceMap";
import Event from "../models/Events";

class EventController {
  async store(req, res) {
    try {
      const newEvent = await Event.create(req.body);
      const { id, title, description, date, places, status} = newEvent
      return res.json({ id, title, description, date, places, status});
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const events = await Event.findAll( { attributes: ['id', 'title', 'description', 'date', 'places', 'status'] });
      return res.json(events);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const event = await Event.findByPk(req.params.id);

      const {id, title, description, date, places, status} = event
      return res.json({id, title, description, date, places, status});
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }

  async update(req, res) {
    try {  

      const event = await Event.findByPk(req.params.id);

      if (!event) {
        return res.status(400).json({
          errors: ["Evento não existe"],
        });
      }

      const newdata = await event.update(req.body);

      return res.json(newdata);
    } catch (e) {
      return res.json(null);
    }
  }

  async delete(req, res) {
    try {
 

      const event = await Event.findByPk(req.params.id);

      if (!event) {
        return res.status(400).json({
          errors: ["Eventos não existe"],
        });
      }

     await event.destroy(req.body);

      return res.json(null);
    } catch (e) {
      return res.json(null);
    }
  }
}

export default new EventController();
