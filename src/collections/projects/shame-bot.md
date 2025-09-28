---
name: "Shame Bot"
tags:
  - "Rust"
  - "PostgreSQL"
  - "Docker"
  - "Web APIs"
subtitle: "A Discord bot made to learn Discord's guild command registration, design and use of an efficient database schema, and how to containerize software for easy distribution."
description: "desc here"
github: "https://github.com/aconamos/shame_bot"
github_name: "shame_bot"
date: 06/01/2025
---

Shame Bot was developed as part of a University discord in order to humorously punish users.

<br>

Each server can designate a role as their 'kenneled' role. The permissions of the role are up to the server owners, but the intended use is to be a tole that restricts you to one channel.
The challenge here is that I also decided to implement extensive configuration. I wanted to let users customize the messages sent and the name of the command.

<br>

This was a problem because of the Discord framework I was using - Poise. It is an opinionated framework for developing Discord bots easily and provides a layer of abstraction over the Discord Web API and Gateway. It included a feature-rich command framework for registering, listening to, and dispatching commands. The problem with this was that you couldn't add commands that weren't defined at compile time.

<br>

As a workaround, I had to hijack the event listener, filter out events that would already be consumed, build the same command interaction context that the framework would, and then dispatch the command myself. It worked shockingly well, and the bot reached a finished state.

<br>

It connects to a Postgres database to store persistent data. This keeps the configuration for each server and a log of every punishment dispensed for analytics as well as health checks.

<br>

Health checks are a critical feature of the bot - an admin could remove the designated role early, and the analytics would be wrong. To counter this, every 30 seconds, it queries the database for every kenneling that should be active, and ensures the role is still applied. If not, it ends early. 

<br>

Since punishments are stored in memory, if the bot shuts down, it leaves stale punishments. Although this hasn't been fixed, the bot still saw good success, and has moved into the second stage of its development.

<br>

It was enjoyed by the residents of the Discord, although with one highly requested feature: the ability to add multiple designated kennel roles.

<br>

This requires an extension to the existing architecture. Although, the code was amateurish at first, and as such, is being restructured rather heavily to support this feature. 

<br>

It was a valuable foray into async Rust, production databases, and bundling software. 
