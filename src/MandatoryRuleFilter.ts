import {ValidationRule, ValidationRuleFilter} from "themis-validation-core";
import {MandatoryRule} from "themis-validation-rules-common";

export class MandatoryRuleFilter implements ValidationRuleFilter {
    isAcceptedRule(validationRule: ValidationRule): boolean {
        if (validationRule instanceof MandatoryRule) {
            return true;
        }
        return false;
    }
}
