type SocialLink = {
  label: string;
  href: string;
};

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface AdminEmailProps {
  formData: ContactFormData;
  adminName: string;
  portfolioUrl: string;
  logoUrl?: string;
  socials?: SocialLink[];
}

interface UserEmailProps {
  userName: string;
  adminName: string;
  portfolioUrl: string;
  logoUrl?: string;
  socials?: SocialLink[];
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeHtmlWithLineBreaks(value: string) {
  return escapeHtml(value).replaceAll("\n", "<br />");
}

const colors = {
  bg: "#F8FAFC",
  panel: "#FFFFFF",
  ink: "#0F172A",
  muted: "#334155",
  border: "rgba(15, 23, 42, 0.10)",
  brand: "#6B2DFF",
  brandSoft: "rgba(107, 45, 255, 0.10)",
};

const fontStack =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

function pillLink(label: string, href: string) {
  const safeLabel = escapeHtml(label);
  const safeHref = escapeHtml(href);

  const icon = (() => {
    const l = label.toLowerCase();
    if (l === "linkedin") return "in";
    if (l === "github") return "gh";
    if (l === "instagram") return "ig";
    if (l === "x") return "x";
    return label.slice(0, 2).toLowerCase();
  })();

  return `
    <a href="${safeHref}" target="_blank" rel="noopener noreferrer"
       style="display:inline-block; text-decoration:none; font-size:12px; font-weight:700; color:${colors.ink};
              background:${colors.brandSoft}; border:1px solid ${colors.border}; border-radius:999px;
              padding:8px 10px; margin:0 8px 8px 0; white-space:nowrap;">
      <span style="display:inline-block; width:18px; height:18px; line-height:18px; text-align:center;
                   border-radius:999px; background:${colors.brand}; color:#fff; font-size:10px; font-weight:900;
                   margin-right:8px; text-transform:uppercase;">
        ${escapeHtml(icon)}
      </span>${safeLabel}
    </a>
  `;
}

function button(label: string, href: string) {
  const safeLabel = escapeHtml(label);
  const safeHref = escapeHtml(href);
  return `
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;">
      <tr>
        <td bgcolor="${colors.brand}" style="border-radius:12px;">
          <a href="${safeHref}" target="_blank" rel="noopener noreferrer"
             style="display:inline-block; padding:12px 16px; font-size:14px; font-weight:800;
                    text-decoration:none; color:#FFFFFF; border-radius:12px;">
            ${safeLabel}
          </a>
        </td>
      </tr>
    </table>
  `;
}

function kvRow(label: string, valueHtml: string) {
  const safeLabel = escapeHtml(label);
  return `
    <tr>
      <td style="padding:10px 12px; font-size:12px; color:${colors.muted}; width:140px; vertical-align:top; border-bottom:1px solid ${colors.border};">
        ${safeLabel}
      </td>
      <td style="padding:10px 12px; font-size:14px; color:${colors.ink}; vertical-align:top; border-bottom:1px solid ${colors.border};">
        ${valueHtml}
      </td>
    </tr>
  `;
}

function emailShell({
  preheader,
  title,
  subtitle,
  logoUrl,
  bodyHtml,
  footerHtml,
}: {
  preheader: string;
  title: string;
  subtitle?: string;
  logoUrl?: string;
  bodyHtml: string;
  footerHtml: string;
}) {
  const safePreheader = escapeHtml(preheader);
  const safeTitle = escapeHtml(title);
  const safeSubtitle = subtitle ? escapeHtml(subtitle) : "";
  const safeLogoUrl = logoUrl ? escapeHtml(logoUrl) : "";

  // Deliverability-first HTML: table-based layout, inline styles, no external CSS/JS.
  return `
  <!doctype html>
  <html lang="en">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${safeTitle}</title>
    </head>
    <body style="margin:0; padding:0; background:${colors.bg}; font-family:${fontStack}; color:${colors.ink};">
      <div style="display:none; max-height:0; overflow:hidden; opacity:0; mso-hide:all;">
        ${safePreheader}
      </div>
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background:${colors.bg};">
        <tr>
          <td align="center" style="padding:28px 12px;">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px;">
              <tr>
                <td style="padding:0 0 12px 0;">
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td align="left" style="font-size:12px; letter-spacing:0.12em; text-transform:uppercase; color:${colors.muted};">
                        ${
                          safeLogoUrl
                            ? `<img src="${safeLogoUrl}" alt="Muiz Dev" height="24" style="display:block; height:24px; width:auto;" />`
                            : `Muiz Dev`
                        }
                      </td>
                      <td align="right" style="font-size:12px; color:${colors.muted};">
                        Contact
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="background:${colors.panel}; border:1px solid ${colors.border}; border-radius:16px; overflow:hidden;">
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td style="height:6px; background:${colors.brand};">
                        <div style="height:6px; line-height:6px; font-size:6px; background:${colors.brand};">&nbsp;</div>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:22px 22px 0 22px;">
                        <div style="font-size:22px; line-height:1.25; font-weight:900; margin:0; color:${colors.ink};">
                          ${safeTitle}
                        </div>
                        ${
                          subtitle
                            ? `<div style="margin-top:8px; font-size:14px; line-height:1.6; color:${colors.muted};">${safeSubtitle}</div>`
                            : ""
                        }
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:18px 22px 22px 22px;">
                        ${bodyHtml}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td align="center" style="padding:14px 10px 0 10px; font-size:12px; color:${colors.muted}; line-height:1.6;">
                  ${footerHtml}
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
}

function renderSocials(socials?: SocialLink[]) {
  if (!socials || socials.length === 0) return "";
  return `
    <div style="margin-top:10px;">
      ${socials.map((s) => pillLink(s.label, s.href)).join("")}
    </div>
  `;
}

export const getAdminNotificationEmail = ({
  formData,
  adminName,
  portfolioUrl,
  logoUrl,
  socials,
}: AdminEmailProps) => {
  const subject = `New message from ${formData.name}`;

  const safeName = escapeHtml(formData.name);
  const safeEmail = escapeHtml(formData.email);
  const safeMessage = escapeHtmlWithLineBreaks(formData.message);
  const replyHref = `mailto:${formData.email}?subject=${encodeURIComponent(
    `Re: Your message to ${adminName}`
  )}`;

  const detailsTable = `
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"
      style="border:1px solid ${colors.border}; border-radius:14px;">
      ${kvRow("From", `<strong style="font-weight:900;">${safeName}</strong>`)}
      ${kvRow(
        "Email",
        `<a href="mailto:${safeEmail}" style="color:${colors.brand}; text-decoration:none; font-weight:800;">${safeEmail}</a>`
      )}
      <tr>
        <td style="padding:10px 12px; font-size:12px; color:${colors.muted}; width:140px; vertical-align:top;">
          Message
        </td>
        <td style="padding:10px 12px; font-size:14px; color:${colors.ink}; vertical-align:top;">
          <div style="border-left:3px solid ${colors.brand}; padding-left:12px; color:${colors.ink};">
            ${safeMessage}
          </div>
        </td>
      </tr>
    </table>
  `;

  const footerHtml = `
    This is an automated notification from your portfolio contact form.<br />
    <a href="${escapeHtml(portfolioUrl)}" target="_blank" rel="noopener noreferrer" style="color:${colors.brand}; text-decoration:none; font-weight:800;">
      ${escapeHtml(portfolioUrl)}
    </a>
    ${renderSocials(socials)}
  `;

  const html = emailShell({
    preheader: `New portfolio message from ${formData.name}.`,
    title: `New message`,
    subtitle: `Hi ${adminName}, you received a new message via your portfolio.`,
    logoUrl,
    bodyHtml: `
      <div style="margin:0 0 14px 0; font-size:14px; line-height:1.7; color:${colors.muted};">
        Reply directly to the sender or review the details below.
      </div>
      ${button("Reply to message", replyHref)}
      <div style="height:14px; line-height:14px; font-size:14px;">&nbsp;</div>
      ${detailsTable}
    `,
    footerHtml,
  });

  const text = `New Contact Form Submission\n\nFrom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nPortfolio: ${portfolioUrl}\n`;

  return { subject, html, text };
};

export const getUserConfirmationEmail = ({
  userName,
  adminName,
  portfolioUrl,
  logoUrl,
  socials,
}: UserEmailProps) => {
  const subject = `Message received - ${adminName}`;

  const footerHtml = `
    This is an automated confirmation. If you did not send this message, you can ignore this email.<br />
    <a href="${escapeHtml(portfolioUrl)}" target="_blank" rel="noopener noreferrer" style="color:${colors.brand}; text-decoration:none; font-weight:800;">
      ${escapeHtml(portfolioUrl)}
    </a>
    ${renderSocials(socials)}
  `;

  const html = emailShell({
    preheader: `We received your message. ${adminName} will reply soon.`,
    title: `Thanks, ${userName}!`,
    subtitle: `Your message has been delivered. You will hear back soon.`,
    logoUrl,
    bodyHtml: `
      <div style="margin:0 0 12px 0; font-size:14px; line-height:1.7; color:${colors.muted};">
        If you have a project in mind, including scope and timeline helps me respond faster.
      </div>
      <div style="margin:0 0 16px 0; font-size:14px; line-height:1.7; color:${colors.muted};">
        Best regards,<br />
        <strong style="color:${colors.ink}; font-weight:900;">${escapeHtml(adminName)}</strong>
      </div>
      ${button("View portfolio", portfolioUrl)}
    `,
    footerHtml,
  });

  const text = `Hi ${userName},\n\nThanks for reaching out. I received your message and will get back to you soon.\n\nPortfolio: ${portfolioUrl}\n\nBest regards,\n${adminName}\n`;

  return { subject, html, text };
};
