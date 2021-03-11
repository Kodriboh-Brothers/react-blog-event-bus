# Event Bus

The event bus acts as our event broker, this may also be referred to as a service router. The event broker relies on an event-driven architecture. 

Each service emits an event upon receiving a request. The event bus receives these requests and emits and event to each service, any service listening to this port which cares about the particular event emitted will then take the data from the event and update it's own database dependent on the data received in the event.