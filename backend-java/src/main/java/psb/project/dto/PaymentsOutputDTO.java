package psb.project.dto;

public class PaymentsOutputDTO {
    private String checkoutUrl;
    private String sessionId;

    // Constructor
    public PaymentsOutputDTO(String checkoutUrl, String sessionId) {
        this.checkoutUrl = checkoutUrl;
        this.sessionId = sessionId;
    }

    // Getters și setters
    public String getCheckoutUrl() {
        return checkoutUrl;
    }

    public void setCheckoutUrl(String checkoutUrl) {
        this.checkoutUrl = checkoutUrl;
    }

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }
}
