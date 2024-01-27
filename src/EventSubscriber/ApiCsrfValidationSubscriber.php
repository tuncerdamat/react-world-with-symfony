<?php

namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;

class ApiCsrfValidationSubscriber implements EventSubscriberInterface
{
    public function onKernelRequest(GetResponseEvent $event)
    {
        if(!$event->isMasterRequest()){
            return;
        }
        
        $request = $event->getRequest();
        
        // no validation needed for safe HTTP methods like GET or HEAD
        if($request->isMethodSafe(false)){
            return;
        }
    }

    public static function getSubscribedEvents()
    {
        return [
           'kernel.request' => 'onKernelRequest',
        ];
    }
}
