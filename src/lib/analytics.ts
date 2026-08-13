/**
 * Lightweight analytics event layer.
 *
 * Logs structured events to console in development.
 * Replace the `dispatch` implementation with your analytics provider
 * (Plausible, PostHog, Amplitude, etc.) when ready.
 */

export type AnalyticsEvent =
  | { name: "cta_click"; properties: { location: string; tier?: string } }
  | { name: "pricing_tier_select"; properties: { tier: string } }
  | { name: "signup_started"; properties: { tier: string } }
  | {
      name: "signup_completed";
      properties: {
        tier: string;
        currentSpend: string;
        tools: string[];
      };
    };

function dispatch(event: AnalyticsEvent): void {
  if (typeof window === "undefined") return;

  // Replace this block with your analytics provider's track call.
  // Example for PostHog:
  //   posthog.capture(event.name, event.properties);
  // Example for Plausible:
  //   plausible(event.name, { props: event.properties });

  if (process.env.NODE_ENV === "development") {
    console.log("[analytics]", event.name, event.properties);
  }
}

export function trackCtaClick(location: string, tier?: string): void {
  dispatch({ name: "cta_click", properties: { location, tier } });
}

export function trackTierSelect(tier: string): void {
  dispatch({ name: "pricing_tier_select", properties: { tier } });
}

export function trackSignupStarted(tier: string): void {
  dispatch({ name: "signup_started", properties: { tier } });
}

export function trackSignupCompleted(
  tier: string,
  currentSpend: string,
  tools: string[],
): void {
  dispatch({
    name: "signup_completed",
    properties: { tier, currentSpend, tools },
  });
}
