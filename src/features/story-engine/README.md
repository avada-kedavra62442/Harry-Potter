# Story engine

Stories are data-driven in `stories.js`. Each story has a start scene and a scene map. Scenes contain a title, text, and choices; each choice has a label, hint, next scene ID, and optional inventory reward or completion flag. The engine records decisions, scene visits, inventory, and completion in the local player profile.

Current persistence is browser-local via localStorage. This is a client-side prototype, not a synced account or secure save system.