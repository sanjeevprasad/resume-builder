export const resume_schema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "jobtitle": { "type": "string" },
    "email": { "type": "string", "format": "email" },
    "phone": { "type": "string", "format": "phone" },
    "website": { "type": "string", "format": "uri" },
    "image": { "type": "string" },
    "location": { "type": "string" },
    "objective": { "type": "string" },
    "social": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "network": { "type": "string" },
          "username": { "type": "string" },
          "url": { "type": "string", "format": "uri" }
        },
        "required": ["network", "username", "url"]
      }
    },
    "summary": {
      "type": "array",
      "items": { "type": "string" }
    },
    "work": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "position": { "type": "string" },
          "company": { "type": "string" },
          "daterange": { "type": "string" },
          "summary": {
            "type": "array",
            "items": { "type": "string" }
          }
        },
        "required": ["position", "company", "daterange", "summary"]
      }
    },
    "skillscategories": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": { "type": "string" },
          "skills": {
            "type": "array",
            "items": { "type": "string" }
          }
        },
        "required": ["name", "skills"]
      }
    },
    "education": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "institution": { "type": "string" },
          "degree": { "type": "string" },
          "course": { "type": "string" },
          "daterange": { "type": "string" },
          "score": { "type": "string" }
        },
        "required": ["institution", "degree", "course", "daterange", "score"]
      }
    },
    "showfact": { "type": "boolean" }
  },
  "required": [
    "name",
    "jobtitle",
    "email",
    "phone",
    "website",
    "image",
    "location",
    "objective",
    "social",
    "summary",
    "work",
    "skillscategories",
    "education",
    "showfact"
  ]
}
