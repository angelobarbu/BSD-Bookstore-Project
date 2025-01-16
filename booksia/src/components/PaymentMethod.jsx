import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group.tsx";
import { Label } from "@/components/ui/label.tsx";

export default function PaymentMethod() {
    return (
        <section>
            <h3 className="text-xl font-semibold">Payment Method</h3>
            <hr className="border-1 border-black mt-1" />
            <RadioGroup defaultValue="option-one" className="pt-2">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">Cash on delivery</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">Card</Label>
                </div>
            </RadioGroup>
        </section>
    );
}
