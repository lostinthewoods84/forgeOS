# Example: Notification Button

---

## 1. READY

What:
Add a notification button to the header

Why:
Users need visibility into updates and system activity

Success:
- Bell icon in header
- Shows unread count
- Opens dropdown panel

Not doing:
- No backend persistence
- No email notifications
- No settings/preferences

---

## 2. PRD

Feature: Notification Button

Requirements:
- Bell icon in top-right header
- Badge showing unread count
- Click opens dropdown panel

Behavior:
- Panel shows list of notifications (latest first)

Edge Cases:
- No notifications → show empty state

Acceptance Criteria:
- Button always visible
- Count updates correctly
- Panel opens/closes reliably

---

## 3. BUILD

### Build Prompt

Implement a notification button in the header.

Requirements:
- Add bell icon to header component
- Display unread count badge
- Clicking opens dropdown panel
- Use mock data for notifications

Constraints:
- Keep it simple
- Follow existing component patterns
- No backend integration

---

## 4. DONE

Does it match goal? yes

What’s missing:
- No empty state yet

Good enough to ship? yes (POC)

---

## 5. LEARNING

Expected:
Users will click the notification button to check updates

Observed:
Low engagement (few clicks)

Delta:
Notifications may not be valuable yet

Decision:
Improve notification content before adding more features