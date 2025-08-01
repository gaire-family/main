import React from 'react';
import { eventsData, type Event } from '../data/eventsData';
import { Calendar, MapPin, CheckCircle, Clock } from 'lucide-react';

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const isPast = event.type === 'past';
  return (
    <div className={`event-card ${isPast ? 'past-event' : ''}`}>
      <div className="event-date-badge">
        <span className="month">
          {new Date(event.date).toLocaleString('default', { month: 'short' })}
        </span>
        <span className="day">{new Date(event.date).getDate()}</span>
      </div>
      <div className="event-details">
        <h3 className="event-title">{event.title}</h3>
        <div className="event-meta">
          <span>
            <Calendar size={14} /> {event.date}
          </span>
          <span>
            <MapPin size={14} /> {event.location}
          </span>
        </div>
        <p className="event-description">{event.description}</p>
        {isPast && (
          <div className="past-event-tag">
            <CheckCircle size={16} />
            <span>Event Concluded</span>
          </div>
        )}
      </div>
    </div>
  );
};

const EventsPage: React.FC = () => {
  const upcomingEvents = eventsData.filter((e) => e.type === 'upcoming');
  const pastEvents = eventsData.filter((e) => e.type === 'past');

  return (
    <div className="page-container events-page">
      <div className="events-hero">
        <h1>Community Events</h1>
        <p>Bringing our family together, one event at a time.</p>
      </div>

      <div className="events-section">
        <h2>
          <Clock size={28} /> Upcoming Events
        </h2>
        <div className="events-grid">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))
          ) : (
            <p>No upcoming events scheduled. Please check back soon!</p>
          )}
        </div>
      </div>

      <div className="events-section">
        <h2>
          <CheckCircle size={28} /> Past Events
        </h2>
        <div className="events-grid">
          {pastEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
